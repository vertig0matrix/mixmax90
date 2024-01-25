import { test, vi, expect } from 'vitest'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Search from './Search'
import { searchForArtist, handleRelatedArtistData } from './apiServices.js'


vi.mock('./apiServices.js')

describe('Search Component', () => {
    test('calls handleSearch on form submission', async () => {
        const setSearch = vi.fn()
        searchForArtist = vi.fn()
            .mockReturnValue({
                artists: {
                    items: []
                }
            })

        render(<Search search="test artist" setSearch={setSearch} />)

        fireEvent.submit(screen.getByRole('button'))
        await expect(searchForArtist).toHaveBeenCalledWith('test+artist')
        expect(setSearch).toHaveBeenCalledWith('')
    })
})