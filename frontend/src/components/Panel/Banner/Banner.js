import React from 'react'
import { Panel, PanelContent } from './BannerStyles';
import { StyledHeader } from '../../../styles/common/headers';
import { UnorderedList } from '../../../styles/common/lists';

 const Banner = () => {
  return (
    <Panel banner right>
      <PanelContent color0 span375>
        <StyledHeader major>
          Hello, my name<br/>
          is Ethereal
        </StyledHeader>
        <p>This is <strong>Ethereal</strong>, a free site template by AJ</p>
        <UnorderedList actions>
          <li><a /></li>
        </UnorderedList>
      </PanelContent>
    </Panel>
  )
}

export default Banner;