import { Component } from '../../../core/models/component/component.class'
import template from './app-section.template.html'
import styles from './app-section.styles.scss'

const component = new Component()

const data = {
	num: 14,
	changeNum: function() {
		this.num += 3
		console.log(this.num)
	}
}

component.define({
	name: 'app-section',
	template,
	styles,
	data
})