import React from 'react'
import { SlSpeedometer } from 'react-icons/sl'
import styles from './Speed.module.scss'
import Title from '../Title/Title'
import SpeedSlider from '../SpeedSlider/SpeedSlider'

export default function Speed() {
	return (
		<div>
			<Title icon={<SlSpeedometer />} text={'Speed'} />
			<SpeedSlider />
		</div>
	)
}
