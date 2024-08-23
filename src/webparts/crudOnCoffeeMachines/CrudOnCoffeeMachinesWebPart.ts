import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import CrudOnCoffeeMachines from './components/main/CrudOnCoffeeMachines';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ICrudOnCoffeeMachinesWebPartProps {
  context: WebPartContext;
}

export default class CrudOnCoffeeMachinesWebPart extends BaseClientSideWebPart<ICrudOnCoffeeMachinesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICrudOnCoffeeMachinesWebPartProps> =  React.createElement(
      // Wrap the component with AppContext.Provider so we can use context anywhere
    CrudOnCoffeeMachines, 
      {
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

   protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

}