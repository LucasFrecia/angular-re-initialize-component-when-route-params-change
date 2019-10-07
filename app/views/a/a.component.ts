import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router'; 

@Component({
  selector: 'app-component-a',
  template: `
    <div>
      <h2>Coponent With subscriptions</h2>
      <h3>Total Users: # {{users?.length}}</h3>

      <a [routerLink]="['componentA']" [queryParams]="{counter: users?.length}"> Routing with parameter</a>  
    </div>
  `,
})
export class ComponentA {
    
    public users;
    public subscriptipns_count: number;
    public subscribers: any = {};

    constructor(private router: Router, private http: Http) {
    /** 
      * This is important: Since this screen can be accessed from two menu options 
      * we need to tell angular to reload the component when this happens.
      * It is important to filter the router events since router will emit many events,
      * therefore calling reInitComponent many times wich we do not want.
      */   
      this.subscribers._router_subscription = this.router.events.filter(
        evt => evt instanceof NavigationEnd).subscribe(() => { 
        this.reInitComponent();
      });
    }

    reInitComponent() {
        this.customOnDestroy();
        this.customOnInit();
    }

    customOnInit() {
        // add your subscriptions to subscribers.WHATEVERSUB here
        // put your ngOnInit code here, and remove implementation and import 
        this.subscribers._http_subscription = this.http.get('https://jsonplaceholder.typicode.com/users')
          .map(res => res.json())
          .subscribe(res => this.users = res)
          this.updateCounter();
    }

    customOnDestroy() {
      // here goes all logic to re initialize || modify the component vars  
    }

    /**
     * onDestroy will be called when router changes component, 
     * but not when changin parameters ;)
     * it is importatn to unsubscribe here
     */
    ngOnDestroy() {
      for (let subscriberKey in this.subscribers) {
          let subscriber = this.subscribers[subscriberKey];
          if (subscriber instanceof Subscription) {
            subscriber.unsubscribe();
            this.updateCounter();
            console.log('Unsubscribed from Subscription: ' + subscriberKey);
          }
        }
    }

    updateCounter() {
       this.subscriptipns_count = Object.keys(this.subscribers).length;
    }
}
