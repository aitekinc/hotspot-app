import { StackNavigationProp } from '@react-navigation/stack'
import { Hotspot } from '@helium/http'
import Balance, { NetworkTokens } from '@helium/currency'
import { QrScanResult } from '../scan/scanTypes'

export type SendType = 'payment' | 'dc_burn' | 'transfer'

export type SendStackParamList = {
  Send: {
    scanResult?: QrScanResult
    type?: SendType
    hotspot?: Hotspot
    isSeller?: boolean
  }
}

export type SendTransfer = {
  id: number
  address: string
  addressAlias: string
  addressLoading: boolean
  amount: string
  balanceAmount: Balance<NetworkTokens>
  dcAmount: string
  memo: string
  fee: Balance<NetworkTokens>
}

export type SendNavigationProps = StackNavigationProp<SendStackParamList>
