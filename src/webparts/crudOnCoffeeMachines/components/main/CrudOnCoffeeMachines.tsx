import * as React from 'react';
import styles from './CrudOnCoffeeMachines.module.scss';
import { AppContext } from '../../context/AppContext';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { Display } from '../display/Display';

interface ICrudOnCoffeeMachinesProps {
    context: WebPartContext;
}

export default class CrudOnCoffeeMachines extends React.Component<ICrudOnCoffeeMachinesProps, {}> {
  public render(): React.ReactElement<ICrudOnCoffeeMachinesProps> {

    return (
      <AppContext.Provider value={{ spContext: this.props.context }}>      
        <section className={styles.test}>
          <Display />
        </section>
      </ AppContext.Provider >
    );
  }
}
 