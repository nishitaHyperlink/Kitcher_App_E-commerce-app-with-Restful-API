import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import SplashScreen from './screens/SplashScreen';
import FadeScreen from './screens/FadeScreen';
import LoginScreen from './screens/LoginScreen';
import Drawer from './screens/Drawer';
import OTP from './screens/OTP';
import ForgotPassword from './screens/ForgotPassword';
import SignUp from './screens/UserDetails';
import DeliveryAddress from './screens/DeliveryAddress';
import RegistrationDetails from './screens/RegistrationDetails';
import CompanyDetail from './screens/CompanyDetail';
import ChangePassword from './screens/ChangePassword';
import MyAccount from './screens/MyAccount';
import Home from './screens/Home';

import ContactDetails from './screens/ContactDetails';
import Settings from './screens/Settings';
import Notifications from './screens/Notifications';
import Members from './screens/Members';
import Logout from './screens/Logout';
import JohnScott from './screens/JohnScott';
import LoginDetails from './screens/LoginDetails';
import UserPermissions from './screens/UserPermissions';
import CompanySettings from './screens/CompanySettings';
import DeliveryAddresses from './screens/DeliveryAddresses';
import Pizzeria from './screens/Pizzeria';
import EditAddress from './screens/EditAddress';
import DeleteAddress from './screens/DeleteAddress';
import UserDetails from './screens/UserDetails';
import Cart from './screens/Cart';
import TableProps from './components/TableProps';

import Table2 from './components/Table2';
import Quotes from './screens/Quotes';
import QuotesTabProps from './props/QuotesTabProps';
import Orders from './screens/Orders';
import OrderTab from './props/OrderTab';
import OrderProps from './props/OrderProps';
import PendingProps from './props/PendingProps';
import FeaturedProps from './props/FeaturedProps';
import BuyAgainProps from './props/BuyAgainProps';

import CategoriesProps from './props/CategoriesProps';
import SuppliersProps from './props/SuppliersProps';
import SearchDishProps from './props/SearchDishProps';
import NewProductsProps from './props/NewProductsProps';
import AddToCart from './props/AddToCart';
import GetQuoteProps from './props/GetQuoteProps';
import NextScreen from './screens/NextScreen';
import ConfirmedProps from './props/ConfirmedProps';
import DeliveredProps from './props/DeliveredProps';
import ReturnedProps from './props/ReturnedProps';
import MostPopularProps from './props/MostPopularProps';
import AddedToCartModal from './props/AddedToCartModal';
import OrderDetailDone from './screens/OrderDetailDone';
import OrderProgress from './props/OrderProgress';
import OrderLink from './props/OrderLink';
import OrderReturnReceive from './props/OrderReturnReceive';
import ProductDetailPage from './screens/ProductDetailPage';

import UsedForProps from './props/UsedForProps';
import DropDownProduct from './props/DropDownProduct';
import SimilarProducts from './props/SimilarProducts';
import MoreFromSupplier from './props/MoreFromSupplier';
import GetQuoteModal from './props/GetQuoteModal';
import RegistrationDetailsTwo from './screens/RegistrationDetailsTwo';
import DeliveryAddressDetail from './screens/DeliveryAddressDetail';
import CompanyDetail2 from './screens/CompanyDetail2';
import SettingsStack from './screens/AccountStack';
import AccountStack from './screens/AccountStack';
import OrderStack from './screens/OrderStack';
import HomeStack from './screens/HomeStack';
import ProductMoreDetail from './screens/ProductMoreDetail';
import NewProductData from './screens/NewProductData';
import DropDownProductApi from './props/DropDownProductApi';
import UsedForProductApi from './props/UsedForProductApi';
import SimilarProductApi from './props/SimilarProductApi';
import MoreFromSupplierApi from './props/MoreFromSupplierApi';
import ProductMoreDetail2 from './screens/ProductMoreDetail2';
import DropDownProductApi2 from './props/DropDownProductApi2';
import UsedForProductApi2 from './props/UsedForProductApi2';
import SimilarProductApi2 from './props/SimilarProductApi2';
import MoreFromSupplierApi2 from './props/MoreFromSupplierApi2';
import ProductMoreDetail3 from './screens/ProductMoreDetail3';
import DropDownProductApi3 from './props/DropDownProductApi3';
import UsedForProductApi3 from './props/UsedForProductApi3';
import SimilarProductApi3 from './props/SimilarProductApi3';
import MoreFromSupplierApi3 from './props/MoreFromSupplierApi3';
import ProductMoreDetail4 from './screens/ProductMoreDetail4';
import DropDownProductApi4 from './props/DropDownProductApi4';
import UsedForProductApi4 from './props/UsedForProductApi4';
import SimilarProductApi4 from './props/SimilarProductApi4';
import MoreFromSupplierApi4 from './props/MoreFromSupplierApi4';
import ProductMoreDetail5 from './screens/ProductMoreDetail5';
import DropDownProductApi5 from './props/DropDownProductApi5';
import UsedForProductApi5 from './props/UsedForProductApi5';
import ProductMoreDetail6 from './screens/ProductMoreDetail6';
import DropDownProductApi6 from './props/DropDownProductApi6';
import UsedForProductApi6 from './props/UsedForProductApi6';
import SimilarProductApi6 from './props/SimilarProductApi6';
import MoreFromSupplierApi6 from './props/MoreFromSupplierApi6';
import ProductMoreDetail7 from './screens/ProductMoreDetail7';
import DropDownProductApi7 from './props/DropDownProductApi7';
import SimilarProductApi7 from './props/SimilarProductApi7';
import MoreFromSupplierApi7 from './props/MoreFromSupplierApi7';
import UsedForProductApi7 from './props/UsedForProductApi7';
import ProductMoreDetail8 from './screens/ProductMoreDetail8';
import DropDownProductApi8 from './props/DropDownProductApi8';
import UsedForProductApi8 from './props/UsedForProductApi8';
import SimilarProductApi8 from './props/SimilarProductApi8';
import MoreFromSupplierApi8 from './props/MoreFromSupplierApi8';
import ProductMoreDetail9 from './screens/ProductMoreDetail9';
import DropDownProductApi9 from './props/DropDownProductApi9';
import UsedForProductApi9 from './props/UsedForProductApi9';
import SimilarProductApi9 from './props/SimilarProductApi9';
import MoreFromSupplierApi9 from './props/MoreFromSupplierApi9';
import ProductMoreDetail10 from './screens/ProductMoreDetail10';
import DropDownProductApi10 from './props/DropDownProductApi10';
import UsedForProductApi10 from './props/UsedForProductApi10';
import SupplierDetail from './screens/SupplierDetail';
import SupplierDetailTabs from './props/SupplierDetailTabs';
import SupplierDetailList from './props/SupplierDetailList';
import BrandsProps from './props/BrandsProps';
import SupplierAllProductProps from './props/SupplierAllProductProps';
import CategoriesList from './screens/CategoriesList';
import SuppliersDetail1 from './props/SuppliersDetail1';
import SupplierDetail2 from './screens/SupplierDetail2';
import SupplierDetailTabs2 from './props/SupplierDetailTabs2';
import SuppliersDetailProp2 from './props/SuppliersDetailProp2';
import SupplierDetailList2 from './props/SupplierDetailList2';
import SupplierCategory2 from './props/SupplierCategory2';
import SupplierDetail3 from './screens/SupplierDetail3';
import SupplierDetailTabs3 from './props/SupplierDetailTabs3';
import SuppliersDetailProp3 from './props/SuppliersDetailProp3';
import SupplierDetailList3 from './props/SupplierDetailList3';
import BrandsProps3 from './props/BrandsProps3';
import SupplierDetail4 from './screens/SupplierDetail4';
import SupplierDetailTabs4 from './props/SupplierDetailTabs4';
import SuppliersDetailProp4 from './props/SuppliersDetailProp4';
import SupplierDetailList4 from './props/SupplierDetailList4';
import BrandsProps4 from './props/BrandsProps4';
import SupplierDetail5 from './screens/SupplierDetail5';
import SupplierDetailTabs5 from './props/SupplierDetailTabs5';
import SuppliersDetailProp5 from './props/SuppliersDetailProp5';
import SupplierDetailList5 from './props/SupplierDetailList5';
import BrandsProps5 from './props/BrandsProps5';
import SupplierDetail6 from './screens/SupplierDetail6';
import SupplierDetailTabs6 from './props/SupplierDetailTabs6';
import SuppliersDetailProp6 from './props/SuppliersDetailProp6';
import SupplierDetailList6 from './props/SupplierDetailList6';
import BrandsProps6 from './props/BrandsProps6';
import SupplierDetail7 from './screens/SupplierDetail7';
import SupplierDetailTabs7 from './props/SupplierDetailTabs7';
import SuppliersDetailProp7 from './props/SuppliersDetailProp7';
import BrandsProps7 from './props/BrandsProps7';
import SupplierDetail8 from './screens/SupplierDetail8';
import SupplierDetailTabs8 from './props/SupplierDetailTabs8';
import SuppliersDetailProp8 from './props/SuppliersDetailProp8';
import SupplierDetailList8 from './props/SupplierDetailList8';
import BrandsProps8 from './props/BrandsProps8';
import SupplierDetail9 from './screens/SupplierDetail9';
import SupplierDetail10 from './screens/SupplierDetail10';
import SupplierDetailTabs9 from './props/SupplierDetailTabs9';
import SuppliersDetailProp9 from './props/SuppliersDetailProp9';
import SupplierDetailTabs10 from './props/SupplierDetailTabs10';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="FadeScreen" component={FadeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        <Stack.Screen
          name="RegistrationDetails"
          component={RegistrationDetails}
        />
        <Stack.Screen name="CompanyDetail" component={CompanyDetail} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="JohnScott" component={JohnScott} />
        <Stack.Screen name="LoginDetails" component={LoginDetails} />
        <Stack.Screen name="UserPermissions" component={UserPermissions} />
        <Stack.Screen name="CompanySettings" component={CompanySettings} />
        <Stack.Screen name="DeliveryAddresses" component={DeliveryAddresses} />
        <Stack.Screen name="Pizzeria" component={Pizzeria} />
        <Stack.Screen name="EditAddress" component={EditAddress} />
        <Stack.Screen name="DeleteAddress" component={DeleteAddress} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TableProps" component={TableProps} />
        <Stack.Screen name="Table2" component={Table2} />
        <Stack.Screen name="Quotes" component={Quotes} />
        <Stack.Screen name="QuotesTabProps" component={QuotesTabProps} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderTab" component={OrderTab} />
        <Stack.Screen name="OrderProps" component={OrderProps} />
        <Stack.Screen name="PendingProps" component={PendingProps} />
        <Stack.Screen name="ConfirmedProps" component={ConfirmedProps} />
        <Stack.Screen name="DeliveredProps" component={DeliveredProps} />
        <Stack.Screen name="ReturnedProps" component={ReturnedProps} />

        <Stack.Screen name="MostPopularProps" component={MostPopularProps} />

        <Stack.Screen name="FeaturedProps" component={FeaturedProps} />
        <Stack.Screen name="BuyAgainProps" component={BuyAgainProps} />

        <Stack.Screen name="CategoriesProps" component={CategoriesProps} />
        <Stack.Screen name="SuppliersProps" component={SuppliersProps} />
        <Stack.Screen name="SearchDishProps" component={SearchDishProps} />
        <Stack.Screen name="NewProductsProps" component={NewProductsProps} />
        <Stack.Screen name="AddToCart" component={AddToCart} />
        <Stack.Screen name="GetQuoteProps" component={GetQuoteProps} />
        <Stack.Screen name="AddedToCartModal" component={AddedToCartModal} />

        <Stack.Screen name="Cart" component={Cart} />

        <Stack.Screen name="NextScreen" component={NextScreen} />

        <Stack.Screen name="OrderDetailDone" component={OrderDetailDone} />
        <Stack.Screen name="OrderProgress" component={OrderProgress} />
        <Stack.Screen name="OrderLink" component={OrderLink} />
        <Stack.Screen
          name="OrderReturnReceive"
          component={OrderReturnReceive}
        />
        <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
        <Stack.Screen name="DropDownProduct" component={DropDownProduct} />

        <Stack.Screen name="UsedForProps" component={UsedForProps} />
        <Stack.Screen name="SimilarProducts" component={SimilarProducts} />
        <Stack.Screen name="MoreFromSupplier" component={MoreFromSupplier} />
        <Stack.Screen name="GetQuoteModal" component={GetQuoteModal} />
        <Stack.Screen
          name="RegistrationDetailsTwo"
          component={RegistrationDetailsTwo}
        />
        <Stack.Screen
          name="DeliveryAddressDetail"
          component={DeliveryAddressDetail}
        />
        <Stack.Screen name="CompanyDetail2" component={CompanyDetail2} />

        <Stack.Screen name="AccountStack" component={AccountStack} />
        <Stack.Screen name="OrderStack" component={OrderStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="ProductMoreDetail" component={ProductMoreDetail} />
        <Stack.Screen name="NewProductData" component={NewProductData} />
        <Stack.Screen
          name="DropDownProductApi"
          component={DropDownProductApi}
        />
        <Stack.Screen name="UsedForProductApi" component={UsedForProductApi} />
        <Stack.Screen name="SimilarProductApi" component={SimilarProductApi} />
        <Stack.Screen
          name="MoreFromSupplierApi"
          component={MoreFromSupplierApi}
        />
        <Stack.Screen
          name="ProductMoreDetail2"
          component={ProductMoreDetail2}
        />
        <Stack.Screen
          name="DropDownProductApi2"
          component={DropDownProductApi2}
        />
        <Stack.Screen
          name="UsedForProductApi2"
          component={UsedForProductApi2}
        />
        <Stack.Screen
          name="SimilarProductApi2"
          component={SimilarProductApi2}
        />
        <Stack.Screen
          name="MoreFromSupplierApi2"
          component={MoreFromSupplierApi2}
        />
        <Stack.Screen
          name="ProductMoreDetail3"
          component={ProductMoreDetail3}
        />
        <Stack.Screen
          name="DropDownProductApi3"
          component={DropDownProductApi3}
        />
        <Stack.Screen
          name="UsedForProductApi3"
          component={UsedForProductApi3}
        />
        <Stack.Screen
          name="SimilarProductApi3"
          component={SimilarProductApi3}
        />
        <Stack.Screen
          name="MoreFromSupplierApi3"
          component={MoreFromSupplierApi3}
        />
        <Stack.Screen
          name="ProductMoreDetail4"
          component={ProductMoreDetail4}
        />
        <Stack.Screen
          name="DropDownProductApi4"
          component={DropDownProductApi4}
        />
        <Stack.Screen
          name="UsedForProductApi4"
          component={UsedForProductApi4}
        />
        <Stack.Screen
          name="SimilarProductApi4"
          component={SimilarProductApi4}
        />
        <Stack.Screen
          name="MoreFromSupplierApi4"
          component={MoreFromSupplierApi4}
        />
        <Stack.Screen
          name="ProductMoreDetail5"
          component={ProductMoreDetail5}
        />
        <Stack.Screen
          name="DropDownProductApi5"
          component={DropDownProductApi5}
        />
        <Stack.Screen
          name="UsedForProductApi5"
          component={UsedForProductApi5}
        />
        <Stack.Screen
          name="ProductMoreDetail6"
          component={ProductMoreDetail6}
        />
        <Stack.Screen
          name="DropDownProductApi6"
          component={DropDownProductApi6}
        />
        <Stack.Screen
          name="UsedForProductApi6"
          component={UsedForProductApi6}
        />
        <Stack.Screen
          name="SimilarProductApi6"
          component={SimilarProductApi6}
        />
        <Stack.Screen
          name="MoreFromSupplierApi6"
          component={MoreFromSupplierApi6}
        />
        <Stack.Screen
          name="ProductMoreDetail7"
          component={ProductMoreDetail7}
        />
        <Stack.Screen
          name="DropDownProductApi7"
          component={DropDownProductApi7}
        />
        <Stack.Screen
          name="SimilarProductApi7"
          component={SimilarProductApi7}
        />
        <Stack.Screen
          name="MoreFromSupplierApi7"
          component={MoreFromSupplierApi7}
        />
        <Stack.Screen
          name="UsedForProductApi7"
          component={UsedForProductApi7}
        />
        <Stack.Screen
          name="ProductMoreDetail8"
          component={ProductMoreDetail8}
        />
        <Stack.Screen
          name="DropDownProductApi8"
          component={DropDownProductApi8}
        />
        <Stack.Screen
          name="UsedForProductApi8"
          component={UsedForProductApi8}
        />
        <Stack.Screen
          name="SimilarProductApi8"
          component={SimilarProductApi8}
        />
        <Stack.Screen
          name="MoreFromSupplierApi8"
          component={MoreFromSupplierApi8}
        />
        <Stack.Screen
          name="ProductMoreDetail9"
          component={ProductMoreDetail9}
        />
        <Stack.Screen
          name="DropDownProductApi9"
          component={DropDownProductApi9}
        />
        <Stack.Screen
          name="UsedForProductApi9"
          component={UsedForProductApi9}
        />
        <Stack.Screen
          name="SimilarProductApi9"
          component={SimilarProductApi9}
        />
        <Stack.Screen
          name="MoreFromSupplierApi9"
          component={MoreFromSupplierApi9}
        />
        <Stack.Screen
          name="ProductMoreDetail10"
          component={ProductMoreDetail10}
        />
        <Stack.Screen
          name="DropDownProductApi10"
          component={DropDownProductApi10}
        />
        <Stack.Screen
          name="UsedForProductApi10"
          component={UsedForProductApi10}
        />

<Stack.Screen
          name="SupplierDetail"
          component={SupplierDetail}
        />

        <Stack.Screen name='SupplierDetailTabs' component={SupplierDetailTabs} />
        <Stack.Screen name='SupplierDetailList' component={SupplierDetailList} />
        <Stack.Screen name='BrandsProps' component={BrandsProps} />
        <Stack.Screen name='SupplierAllProductProps' component={SupplierAllProductProps} />
        <Stack.Screen name='CategoriesList' component={CategoriesList} />
        <Stack.Screen name='SuppliersDetail1' component={SuppliersDetail1} />
        <Stack.Screen name='SupplierDetail2' component={SupplierDetail2} />
        <Stack.Screen name='SupplierDetailTabs2' component={SupplierDetailTabs2} /> 
       <Stack.Screen name='SuppliersDetailProp2' component={SuppliersDetailProp2} /> 
       <Stack.Screen name='SupplierDetailList2' component={SupplierDetailList2} />
       <Stack.Screen name='SupplierCategory2' component={SupplierCategory2} />
       <Stack.Screen name='SupplierDetail3' component={SupplierDetail3} />
       <Stack.Screen name='SupplierDetailTabs3' component={SupplierDetailTabs3} />
       <Stack.Screen name='SuppliersDetailProp3' component={SuppliersDetailProp3} />
       <Stack.Screen name='SupplierDetailList3' component={SupplierDetailList3} />
       <Stack.Screen name='BrandsProps3' component={BrandsProps3} />
       <Stack.Screen name='SupplierDetail4' component={SupplierDetail4} />
       <Stack.Screen name='SupplierDetailTabs4' component={SupplierDetailTabs4} />
       <Stack.Screen name='SuppliersDetailProp4' component={SuppliersDetailProp4} />
       <Stack.Screen name='SupplierDetailList4' component={SupplierDetailList4} />
       <Stack.Screen name='BrandsProps4' component={BrandsProps4} />
       <Stack.Screen name='SupplierDetail5' component={SupplierDetail5} />
       <Stack.Screen name='SupplierDetailTabs5' component={SupplierDetailTabs5} />
       <Stack.Screen name='SuppliersDetailProp5' component={SuppliersDetailProp5} />
       <Stack.Screen name='SupplierDetailList5' component={SupplierDetailList5} />
       <Stack.Screen name='BrandsProps5' component={BrandsProps5} />
       <Stack.Screen name='SupplierDetail6' component={SupplierDetail6} />
       <Stack.Screen name='SupplierDetailTabs6' component={SupplierDetailTabs6} />
       <Stack.Screen name='SuppliersDetailProp6' component={SuppliersDetailProp6} />
       <Stack.Screen name='SupplierDetailList6' component={SupplierDetailList6} />
       <Stack.Screen name='BrandsProps6' component={BrandsProps6} />
       <Stack.Screen name='SupplierDetail7' component={SupplierDetail7} />
       <Stack.Screen name='SupplierDetailTabs7' component={SupplierDetailTabs7} />
       <Stack.Screen name='SuppliersDetailProp7' component={SuppliersDetailProp7} />
       <Stack.Screen name='BrandsProps7' component={BrandsProps7} />
       <Stack.Screen name='SupplierDetail8' component={SupplierDetail8} />
       <Stack.Screen name='SupplierDetailTabs8' component={SupplierDetailTabs8} />
       <Stack.Screen name='SuppliersDetailProp8' component={SuppliersDetailProp8} />
       <Stack.Screen name='SupplierDetailList8' component={SupplierDetailList8} />
       <Stack.Screen name='BrandsProps8' component={BrandsProps8} />
       <Stack.Screen name='SupplierDetail9' component={SupplierDetail9} />
       <Stack.Screen name='SupplierDetailTabs9' component={SupplierDetailTabs9} />
       <Stack.Screen name='SuppliersDetailProp9' component={SuppliersDetailProp9} />
       <Stack.Screen name='SupplierDetail10' component={SupplierDetail10} />
       <Stack.Screen name='SupplierDetailTabs10' component={SupplierDetailTabs10} />

      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
