import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ColorModeScript} from '@chakra-ui/react';

export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<ColorModeScript initialColorMode="light" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
