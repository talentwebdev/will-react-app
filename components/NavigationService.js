import { NavigationActions } from 'react-navigation';

let _navigator;

export function setTopLevelNavigator(nav)
{
    _navigator = nav;
}

export function NavigateScreen(routeName, params)
{
    console.log("NavigateScreen", routeName);
      _navigator.dispatch(
    NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
        params,
    }),
    );
}