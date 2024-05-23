import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import CustomButton from '../CustomButton';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__left}>
				<Link to='/'>
					<img src='images/logo.svg' alt='logo' width={286} height={70} />
				</Link>
				<nav>
					<ul className={styles.items}>
						<li>
							<Link to={'/'} className={styles.link_active}>
								O нас
							</Link>
						</li>
						<li>
							<Link to={'/'} className={styles.link}>
								Портфолио
							</Link>
						</li>
						<li>
							<Link to={'/'} className={styles.link}>
								Услуги
							</Link>
						</li>
						<li>
							<Link to={'/'} className={styles.link}>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className={styles.header__rigth}>
				<div className={styles.social}>
					<ul>
						<li>
							<Link to={'https://vk.com/'}>
								<img src='/images/icons/vk.svg' alt='vk' />
							</Link>
						</li>
						<li>
							<Link to={'https://ok.ru'}>
								<img src='/images/icons/ok.svg' alt='одноклассники' />
							</Link>
						</li>
						<li>
							<Link to={'https://facebook.com'}>
								<img src='/images/icons/fb.svg' alt='facebook' />
							</Link>
						</li>
						<li>
							<Link to={'https://twitter.com'}>
								<img src='/images/icons/x.svg' alt='twitter' />
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.phone}>
					<a href='tel:+74952575565'>
						<img src='/images/icons/phone-call.svg' alt='phone call' />
						<span>+7 495 257 55 65</span>
					</a>
				</div>
				<CustomButton text='Написать нам' style='transparent' width='168px' height='40px' />
			</div>
		</header>
	);
};

export default Header;
