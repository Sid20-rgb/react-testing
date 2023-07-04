import { render, screen } from '@testing-library/react';
import Notes from './Notes';

describe('Notes', () => {
    test('should render correctly', async() => {
        render(<Notes />);
        const h1Elem = screen.getByRole('heading',{
            level:1,
        }); 
        expect(h1Elem).toBeInTheDocument();

        const listElem = screen.getByRole('list');
        expect(listElem).toBeInTheDocument()
        const itemElem = await screen.findAllByRole('listitem');
        expect(itemElem).toHaveLength(2)
    })
    
})