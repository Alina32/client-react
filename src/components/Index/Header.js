import { Menu, Container,Image, Icon, Input } from 'semantic-ui-react';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
	const router = useRouter();
 	const user = false;	

 	function isActive(route) {
 		return route === router.pathname;
 	}

  	return (
	 	<Menu stackable borderless id="menu" inverted>
		 		<Link href="/">
		 			<Menu.Item>
		 			         <div className="logo"/>
		 			</Menu.Item>
		 		</Link>

		 		<Link href="/">
		 			<Menu.Item  name='ГЛАВНАЯ' active={isActive('/')}></Menu.Item>
		 		</Link>
		 		
		 		<Link href="hotels">
		 			<Menu.Item  name='ОТЕЛИ' active={isActive('/hotels')}></Menu.Item>
		 		</Link>
		 		
		 		<Link href="login">
		 			  	<Menu.Item  name='ВОЙТИ' active={isActive('/login')}></Menu.Item>
		 			</Link>
		 			
		 			  <Menu.Item position='right'>
		 			    <Input icon='search' placeholder='город или отель...' />
		 			  </Menu.Item>			 			
		</Menu>
	)
}

export default Header;
