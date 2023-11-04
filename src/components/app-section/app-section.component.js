import { Component } from '../../../core/models/component/component.class'
import template from './app-section.template.html'
import styles from './app-section.styles.scss'

const component = new Component()

component.define({
	name: 'app-section',
	template,
	styles
})