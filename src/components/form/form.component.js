// import { Component } from 'Fulminant-Component'
import { Component } from '../../../core/models/component/component.class'
import template from './form.template.html'
import styles from './form.styles.scss'

const component = new Component()

component.define({
	name: 'app-title',
	template,
	styles,
	props: [],
	memoization: true
})
