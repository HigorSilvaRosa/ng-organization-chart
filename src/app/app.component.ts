import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data = [
    {
      id: "Neo",
      children: [
        {
          id: "Diogo",
          children: [
            {
              id: "Higor",
              children: [
                {
                  id: "Angular",
                  children: [

                  ]
                },
                {
                  id: "CSS",
                  children: [

                  ]
                },
                {
                  id: "HTML",
                  children: [

                  ]
                },
                {
                  id: "Piadas sem graça",
                  children: [

                  ]
                },
              ]
            },
            {
              id: "Edson",
              children: [
                {
                  id: "PHP",
                  children: [
                  ]
                },
                {
                  id: "Amazon AWS",
                  children: [
                  ]
                },

              ]
            },
            {
              id: "Karen",
              children: [
                {
                  id: "Litrão",
                  children: [

                  ]
                },
                {
                  id: "Balada",
                  children: [
                    {
                      id: "Terraço Club",
                      children: [

                      ]
                    },
                  ]
                },
                {
                  id: "Happy Hour",
                  children: [
                    {
                      id: "Risca faca",
                      children: [

                      ]
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  clickNode(node) {
    console.log(node);
  }
}
