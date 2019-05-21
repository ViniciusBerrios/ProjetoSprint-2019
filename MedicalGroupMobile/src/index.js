import Login from './pages/login';
import Listar from './pages/listar';
import Cadastrar from './pages/cadastrar';

import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator} from "react-navigation";

const AuthStack = createStackNavigator({Login});

const MainNavigator = createBottomTabNavigator(
    {
        Listar,
        Cadastrar
    },
    {
        tabBarOptions: {
            inactiveBackgroundColor: "#2C914D",
            activeBackgroundColor: "#006400",
            style:{
                height: 50,
                borderTopColor:"black",
                borderTopWidth: 2
            },

            labelStyle:{
                color:"white",
                fontSize:17,
                textTransform:"uppercase",
                position: "relative",
                bottom:10
            }
        }
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        MainNavigator,
        AuthStack
    },
    {initialRouteName:"AuthStack"}
));