import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import uniq from 'lodash/uniq';
import find from 'lodash/find';

import Block from './Block';

import { makeExpandedSuperBlockSelector, toggleSuperBlock } from '../redux';
import Caret from '../../icons/Caret';
import { ChallengeNode } from '../../../redux/propTypes';

const mapStateToProps = (state, ownProps) => {
  const expandedSelector = makeExpandedSuperBlockSelector(ownProps.superBlock);

  return createSelector(expandedSelector, isExpanded => ({ isExpanded }))(
    state
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleSuperBlock
    },
    dispatch
  );
}

const propTypes = {
  introNodes: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({ slug: PropTypes.string.isRequired }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        block: PropTypes.string.isRequired
      })
    })
  ),
  isExpanded: PropTypes.bool,
  nodes: PropTypes.arrayOf(ChallengeNode),
  superBlock: PropTypes.string,
  toggleSuperBlock: PropTypes.func.isRequired
};

const codingPrepRE = new RegExp('Interview Prep');

function createSuperBlockTitle(str) {
  let courseName
  const dict = require('./dict.json')
  dict.forEach(function(item){
    if(item.english == str){
      courseName = item.chinese
      console.log(courseName)
    }
  })
  return codingPrepRE.test(str)
        ? `${courseName} (数千个小时)`
        : `${courseName} (300个小时)`;
}

export class SuperBlock extends PureComponent {
  renderBlock(superBlock) {
    const { nodes, introNodes } = this.props;
    const blocksForSuperBlock = nodes.filter(
      node => node.superBlock === superBlock
    );
    const blockDashedNames = uniq(
      blocksForSuperBlock.map(({ block }) => block)
    );
    return (
      <ul>
        {blockDashedNames.map(blockDashedName => (
          <Block
            blockDashedName={blockDashedName}
            challenges={blocksForSuperBlock.filter(
              node => node.block === blockDashedName
            )}
            intro={find(
              introNodes,
              ({ frontmatter: { block } }) =>
                block
                  .toLowerCase()
                  .split(' ')
                  .join('-') === blockDashedName
            )}
            key={blockDashedName}
          />
        ))}
      </ul>
    );
  }

  render() {
    const { superBlock, isExpanded, toggleSuperBlock } = this.props;
    return (
      <li className={`superblock ${isExpanded ? 'open' : ''}`}>
        <div className='map-title' onClick={() => toggleSuperBlock(superBlock)}>
          <Caret />
          <h4>{createSuperBlockTitle(superBlock)}</h4>
        </div>
        {isExpanded ? this.renderBlock(superBlock) : null}
      </li>
    );
  }
}

SuperBlock.displayName = 'SuperBlock';
SuperBlock.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SuperBlock);
