import Image from 'next/image'
import logo from '@/images/othersite_full_horizontal.svg'

export function Logo() {
  return <Image alt="OtherSite GmbH" src={logo} width={200} priority />
}
