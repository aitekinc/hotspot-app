import React from 'react'
import CardHandle from './CardHandle'
import Box from '../../../components/Box'
import Text from '../../../components/Text'
import CarotDown from '../../../assets/images/carot-down.svg'
import { triggerNavHaptic } from '../../../utils/haptic'
import TouchableOpacityBox from '../../../components/TouchableOpacityBox'

const ActivityCardHeader = () => {
  const handlePress = () => {
    triggerNavHaptic()
  }

  return (
    <Box padding="m">
      <Box alignItems="center" padding="s">
        <CardHandle />
      </Box>
      <Box flexDirection="row" alignItems="center">
        <Text color="grayDark" fontSize={20} fontWeight="600">
          View
        </Text>
        <TouchableOpacityBox
          flexDirection="row"
          marginHorizontal="xs"
          onPress={handlePress}
        >
          <Text color="purpleMain" fontSize={20} fontWeight="600">
            All Activity
          </Text>
          <Box padding="xs" paddingTop="ms">
            <CarotDown />
          </Box>
        </TouchableOpacityBox>
      </Box>
    </Box>
  )
}

export default ActivityCardHeader
