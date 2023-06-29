import {render, screen} from '@testing-library/react'
import Greet from './Greet'


describe('Greet component', ()=> {
    test('renders correctly', ()=> {
        render(<Greet />)
        // const h1Elem = screen.getByRole('heading', {
        //     name: 'hello',
        // })
        // const h1Elem = screen.getByRole('heading', {
        //     level: 1,
        // })

        const h1Elem = screen.getByText(/hello/i)
        expect(h1Elem).toBeInTheDocument()
        //  const h1Elem = screen.getByText("Hello", {
        //         exact: false,
        //  })
        })  

        test('renders correctly', ()=> {
            render(<Greet name="John" />)
            const h1Elem = screen.getByText(/hello john/i)
            expect(h1Elem).toBeInTheDocument()
        })



        
    })