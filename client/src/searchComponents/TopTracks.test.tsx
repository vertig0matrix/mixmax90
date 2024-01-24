import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopTracks from './TopTracks.tsx';
import { res_obj } from '../Tests/MockObject.ts';



describe('TopTracks Component', () => {
  it('renders a list of tracks', () => {
    const MockObject = res_obj

    render(<TopTracks topTracks={TopTracks} /> )

    

  })
})