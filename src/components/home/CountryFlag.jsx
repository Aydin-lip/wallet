import Flags from 'country-flag-icons/react/3x2'

const countryFlags = {
  US: Flags.US,
  GB: Flags.GB,
  DE: Flags.DE,
}

export default function CountryFlag({ country }) {
  const FlagComponent = countryFlags[country]

  if (!FlagComponent) {
    return null
  }

  return <FlagComponent className="w-12 h-10" />
}
