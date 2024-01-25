import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar.tsx';
import { userEvent } from '@testing-library/user-event';
import { SetStateAction } from 'react';

describe('SearchBar Component', () => {
    it('render form input', () => {
        render(<SearchBar
            search=''
            setSearch={vi.fn()}
            handleSearch={vi.fn()}
        />)

        const searchForm = screen.getByRole('searchbox')
        expect(searchForm).toBeInTheDocument();
    })
})