import React from 'react'
import Proptypes from 'prop-types'
import { Tabs } from 'antd';
import { UserIcon, CartIcon, SearchIcon } from '../../../icons'
import styles from './styles.module.css'

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const righcontent = () => {
	return (
		<div className={styles.rightTabs}>
			<div className={styles.icon}>
				<UserIcon />
			</div>
			<div className={`${styles.icon} ${styles.carIcon}`}>
				<CartIcon />
			</div>
			<div className={styles.icon}>
				<SearchIcon />
			</div>
		</div>
	)
}
const TabsLayout = ({ tabs }) => (
	<div>
		<Tabs
		  defaultActiveKey="1"
			onChange={callback}
			tabBarExtraContent={righcontent()}
			tabBarStyle={{paddingLeft: 40}}>
			{Object.entries(tabs)
				.map(([name, props]) => {
					return (
						<TabPane tab={name} key={props.ref} />
					)
				})}
		</Tabs>
	</div>
);
TabsLayout.propTypes = {
	tabs: Proptypes.object.isRequired
}

export {
	TabsLayout
}
