import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe('Counter', ()=>{
    test('should render correctlty', ()=>{
        render(<Counter />)
        screen.getByRole('heading', {
            level: 1,
        })

        const increaseBtn = screen.getByRole('button', {
            name: 'Increase',
        })

        expect(h1Elem).toBeInTheDocument()
        expect(increaseBtn).toBeInTheDocument()
    })

    test('should increase count when increase button is clicked', async()=>{
        render(<Counter />)
        const increaseBtn = screen.getByRole('button', {
            name: 'Increase',
        })
        await act(()=> userEvent.click(increaseBtn))

        userEvent.click(increaseBtn)
        const h1Elem = screen.getByRole('heading', {
            level: 1,

        })
        expect(h1Elem).toHaveTextContent(2)
    })

    test('should set count when set button is clicked', async()=>{
        render(<Counter />)
    })
})