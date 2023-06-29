import {render, screen, logRoles} from '@testing-library/react'
import Skills from './Skills'

describe('Skills', ()=> {

    const skills = [
        {id:1, name: 'plumbing'},
        {id:2, name: 'carpentry'},
        {id:3, name: 'electrical'},

    ]
    test('renders correctly', ()=> {
        // const view = render(<Skills skills={skills}/>)
        render(<Skills skills={skills}/>)
        const h2Elem = screen.getByRole('heading', 
        {
            level: 2,
        })
        expect(h2Elem).toBeInTheDocument()

        // const listElem = screen.getAllByRole('list')
        // expect(listElem).toBeInTheDocument()
        
    })
    test('renders correctly', ()=> {
        render(<Skills skills={skills} />)
        const itemsElem = screen.getAllByRole('listitem')
        expect(itemsElem).toHaveLength(3)

    })

    test('renders all list items in proper order', ()=> {
        render(<Skills skills={skills} />)
        const itemsElem = screen.getAllByRole('listitem')
        expect(itemsElem[0]).toHaveTextContent('plumbing')
    })

    test('login button is rendered', ()=> {
        render(<Skills skills={skills} />)
        const loginBtn = screen.getByRole('button', {
            name: 'login',
        })
        expect(loginBtn).toBeInTheDocument()
    })

    test('start working button is not rendered', ()=> {
        render(<Skills skills={skills} />)
        const workingBtn = screen.queryByRole('button', {
            name: 'start working',
        })
        expect(workingBtn).not.toBeInTheDocument()

    })

    test('start working button is rendered later', async ()=> {
        render(<Skills skills={skills} />)
        const workingBtn = await screen.findByRole('button', {
            name: 'start working'
        }, {timeout: 2000})
        expect(workingBtn).toBeInTheDocument()
        
    })


})