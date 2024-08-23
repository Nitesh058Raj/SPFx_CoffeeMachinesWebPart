import * as React from 'react';
import styles from './CrudOnCoffeeMachines.module.scss';
import { AppContext } from '../../context/AppContext';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { Layout } from '../layout/Layout';

interface ICrudOnCoffeeMachinesProps {
    context: WebPartContext;
}

export default class CrudOnCoffeeMachines extends React.Component<ICrudOnCoffeeMachinesProps, {}> {
  public render(): React.ReactElement<ICrudOnCoffeeMachinesProps> {

    return (
      <AppContext.Provider value={this.props.context }>      
        <section className={styles.mainConatiner}>
          <Layout />
        </section>
      </ AppContext.Provider >
    );
  }
}
 