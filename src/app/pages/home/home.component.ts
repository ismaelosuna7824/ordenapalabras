import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import {DndDropEvent, DropEffect, EffectAllowed} from "ngx-drag-drop";

interface DraggableItem {
  content: string;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;
}

interface DropzoneLayout {
  container: string;
  list: string;
  dndHorizontal: boolean;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent   {

  draggableListLeft: DraggableItem[] = [
    {
      content: "Á",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "É",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "Í",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "Ó",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "Ú",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "Q",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "W",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "E",
      effectAllowed: "copyMove",
      disable: true,
      handle: false
    },
    {
      content: "R",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "T",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "Y",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "U",
      effectAllowed: "copyMove",
      disable: true,
      handle: false
    },
    {
      content: "I",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "O",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "P",
      effectAllowed: "move",
      disable: true,
      handle: false,
    },
    {
      content: "A",
      effectAllowed: "copyMove",
      disable: true,
      handle: false
    },
    {
      content: "S",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "D",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "F",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "G",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "H",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },{
      content: "J",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "K",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "L",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "Z",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "X",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "C",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "V",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "B",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "N",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
    {
      content: "M",
      effectAllowed: "move",
      disable: true,
      handle: true,
    },
  ];

  draggableListRight: DraggableItem[] = [
    // {
    //   content: "",
    //   effectAllowed: "move",
    //   disable: false,
    //   handle: false,
    // }
  ];
  horizontalLayoutActive:boolean = false;
  private currentDraggableEvent?:DragEvent;
  private currentDragEffectMsg?:string;
  private readonly verticalLayout: DropzoneLayout = {
    container: "row",
    list: "column",
    dndHorizontal: false
  };
  private readonly horizontalLayout: DropzoneLayout = {
    container: "row",
    list: "row wrap",
    dndHorizontal: true
  };

  layout:DropzoneLayout = this.verticalLayout;

  constructor( private snackBarService:MatSnackBar ) {
    this.layout =  this.horizontalLayout 
  }

  setHorizontalLayout( horizontalLayoutActive:boolean ) {

    this.layout =  this.horizontalLayout 
  }

  onDragStart( event:DragEvent ) {

    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;

    this.snackBarService.dismiss();
    this.snackBarService.open( "Drag started!", undefined, {duration: 2000} );
  }

  onDragged( item:any, list:any[], effect:DropEffect ) {

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if( effect === "move" ) {

      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }

  onDragEnd( event:DragEvent ) {
    console.log(event);
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open( this.currentDragEffectMsg || `Drag ended!`, undefined, {duration: 2000} );
  }

  onDrop( event:DndDropEvent, list?:any[] ) {
    console.log('drop' + event.index)
    if( list
      && (event.dropEffect === "copy"
        || event.dropEffect === "move") ) {

      let index = event.index;

      if( typeof index === "undefined" ) {

        index = list.length;
      }

      list.splice( index, 0, event.data );
    }
  }
  pasar(item:any, list:any[]){
    this.draggableListRight.push({
      content: `${item.content}`,
      effectAllowed: "move",
      disable: false,
      handle: true,
    })
  }
  eliminar(item:any, list:any[]){
    this.draggableListRight.splice(item,1)
  }

}
