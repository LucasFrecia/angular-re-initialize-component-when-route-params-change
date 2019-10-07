import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-component-b',
  template: `
    <p>Check unsubscriptions from console when going from one route to the other</p>

    <p> When going to 'Subscribers Route' you will see btn to tell router to add query param, without unsubscribing to the route events. </p>

    <p> When going from 'Subscribers Route' to 'Home' you will see all subscriptions trashed. </p>
  `,
})
export class ComponentB {
}
