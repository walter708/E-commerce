import React from 'react';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';

import {updateCollections} from '../../redux/shop/shop.actions'

import CollectionPage  from '../collection/collection.component';

import {firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utls';

  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class  ShopPage extends React.Component {
        state = {
                loading:true
        }

 unSubscribeFromSnapshot = null ;    

componentDidMount (){
         const {updateCollections} =  this.props;
         const collectionRef = firestore.collection('collections');  

          /* This method is used when communicating with firebase firestore when the RxJs library is avaliable 
             what is great about this method is that it keeps listening for changes 
          
          */
         // Start of this method 
                 //   collectionRef.onSnapshot(
        //           async snapshot => {
        //             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //               console.log(collectionsMap);
        //               updateCollections(collectionsMap);
                     
        //              this.setState({loading : false});
        //          }
        // ) 
        // End  of this method 

          /* This method is used when communicating with firebase firestore but in this case 
          it is just a one time request of data from the backend , there is no listening for changes 
          
          */

           // Start of this method
collectionRef.get().then(snapshot => {
                                        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                                        console.log(collectionsMap);
                                        updateCollections(collectionsMap);
                                        this.setState({loading : false});
                                     }   
                        )       

     
     // End  of this method 
          /* This method is used when communicating with other type of servers that are not firestore,
           this is because when this is used with firestore in order to get 
          the main data there is need to go about eight level directory deep in other to get the data 
          */
 // Start of this method
/*        fetch(
          'https://firestore.googleapis.com/v1/projects/crwn-db-2a056/databases/(default)/documents/collections')
       .then(response => response.json())
       .then(collections => console.log(collections)); */

// End  of this method 

}   
render (){
     
         const {match} =  this.props;
         const {loading} = this.state;
        return(
                <div className ='shop-page'>
                
        <Route exact path = {`${match.path}`}   render ={(props) =>  <CollectionsOverviewWithSpinner isLoading ={loading} {...props}/>} />
                      
        <Route  path = {`${match.path}/:collectionId`} render ={(props) =>  <CollectionPageWithSpinner isLoading ={loading} {...props}/>} />
                </div>
                );
}

}
const mapDispatchToProps = dispatch => ({
        updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect (null , mapDispatchToProps) (ShopPage) ;