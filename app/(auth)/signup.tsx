import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
	return (
		<View className='flex-1 items-center justify-center'>
			<Text>SignUp</Text>
			<Link href='/signin'>Login to your account</Link>
		
		</View>
	)
}

export default SignUp
