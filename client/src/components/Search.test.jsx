import { test, vi, expect } from 'vitest'
import { render, fireEvent, act, screen } from '@testing-library/react'
import Search from './Search'
import { searchForArtist, getRelatedArtistData, getArtistIds, getTopTracks, getRandomTracksByArtist } from './apiServices.js'


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

        fireEvent.submit(screen.getByRole('searchbox'))
        await expect(searchForArtist).toHaveBeenCalledWith('test+artist')
        expect(setSearch).toHaveBeenCalledWith('')
    })

    // test('calls get handleRelatedArtistData and get the topTracks', async () => {
    //     getRelatedArtistData = vi.fn()
    //     getArtistIds = vi.fn().mockResolvedValue(['123', '456'])
    //     getTopTracks = vi.fn()
    //     getRandomTracksByArtist = vi.fn().mockResolvedValueOnce(
    //         { artists: [{ id: '123' }] }, { artists: [{ id: '456' }] }
    //     )
    //     const setTopTracks = vi.fn()

    //     render(<Search id="789" getRelatedArtistData={getRelatedArtistData} getArtistIds={getArtistIds} getTopTracks={getTopTracks} getRandomTracksByArtist={getRandomTracksByArtist} />)

    //     act(() => {
    //         fireEvent.click(screen.getAllByTestId('test-id')[0])
    //         // expect(getRelatedArtistData).toHaveBeenCalledWith('789')
    //     })
    //     expect(setTopTracks).toHaveBeenCalledWith({ artists: [{ id: '123' }] }, { artists: [{ id: '456' }] })
    // })
})
