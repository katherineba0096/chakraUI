import { extendTheme } from "@chakra-ui/react";
const fonts = {
    heading: 'Roboto, sans-serif',
    Body: 'Roboto, sans-serif'
}

const Button = {
    variants: {
        outline: {
            borderRadius: '0',
            textTransform: 'uppercase',
            fontWeight: 'light',
            letterSpacing: '1px',
            color:'white',
            _hover: {
                color: 'black'
            }

        }
    }
}

export const theme = extendTheme({
    fonts, components: { Button
    }
})