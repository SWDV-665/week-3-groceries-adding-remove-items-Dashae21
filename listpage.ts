import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonNav } from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity:2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name:"Eggs",
      quantity: 2
    },
    {
      name: "Strawberries",
      quantity: 1
    }
  ]
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
    public alertCtrl: AlertController  ) {}
    //public dataService: GroceriesServiceProvider, 
    //public inputDialogService: InputDialogServiceProvider, public CameraCtrl: CameraComponent, 
     //public socialSharing: SocialSharing
    

    removeItem(item, index) {
      console.log("Removing Item - ", item, index);
      const toast = this.toastCtrl.create({
        message: 'Removing Item - ' + index + " ...",
        duration: 3000
      });
      //toast.present();
  
      this.items.splice(index, 1);
    }


    addItem() {
      console.log("Adding Item");
      this.showAddItemPrompt();
    }
  
    showAddItemPrompt() {
      const prompt = this.alertCtrl.create({
        //title: 'Add Item',
        message: "Please enter item...",
        inputs: [
          {
            name: 'name',
            placeholder: 'name'
          },
          {
            name: 'quantity',
            placeholder: '000'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: item => {
              console.log('Saved clicked', item);
              this.items.push(item);
            }
          }
        ]
      });
      //prompt.present();
    }
  
}
