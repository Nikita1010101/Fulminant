import { Component } from '../../../core/models/component/component.class'
import template from './main.template.html'
import styles from './main.styles.scss'

const component = new Component()

component.define({
	name: 'main-comp',
	template,
	styles,
	page: true
})
