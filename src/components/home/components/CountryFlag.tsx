import Flags from 'country-flag-icons/react/3x2'

type CountryFlagProps = {
  country: string
}

const countryFlags: Record<string, React.FC<any>> = {
  US: Flags.US,
  GB: Flags.GB,
  DE: Flags.DE,
}

const CountryFlag: React.FC<CountryFlagProps> = ({ country }) => {
  const FlagComponent = countryFlags[country]

  if (!FlagComponent) {
    return null
  }

  return (<FlagComponent className="w-10" />) as React.ReactElement<any>
}

export default CountryFlag
