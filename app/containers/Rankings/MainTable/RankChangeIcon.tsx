import * as React from 'react';
import RankUpIcon from '../../../components/Icons/rankUpIcon';
import RankDownIcon from '../../../components/Icons/rankDownIcon';
import RankNoChangeIcon from '../../../components/Icons/rankNoChangeIcon';
import styled from '../../../styles/styled-components';
import Group from '../../../components/TableWrapper/Group';

interface Props {
  changeInRank: number;
}

function RankChangeIcon(props: Props) {
  const svgIcon =
    props.changeInRank > 0 ? (
      <RankUpIcon />
    ) : props.changeInRank < 0 ? (
      <RankDownIcon />
    ) : (
      <RankNoChangeIcon />
    );

  return (
    <Group>
      {svgIcon}
      <A changeInRank={props.changeInRank}>{props.changeInRank || ''}</A>
    </Group>
  );
}

const A = styled<Props, 'span'>('span')`
  color: ${props => (props.changeInRank > 0 ? '#228B22' : '#8B0000')};
  margin-left: 8px;
`;

export default RankChangeIcon;
