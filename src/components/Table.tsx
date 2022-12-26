import React from 'react'
// stripe
import { Product } from '@stripe/firestore-stripe-payments'
// Icons
import { HiCheck } from 'react-icons/hi'

interface Props {
    products: Product[]
    selectedPlan: Product | null
  }

const Table = ({ products, selectedPlan }: Props) => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="table-row">
          <td className="table-dataT-title">Monthly price</td>
          {products.map((product) => (
            <td
              className={`table-data-feature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              USD{product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="table-row">
          <td className="table-dataT-title">Video quality</td>
          {products.map((product) => (
            <td
              className={`table-data-feature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="table-row">
          <td className="table-dataT-title">Resolution</td>
          {products.map((product) => (
            <td
              className={`table-data-feature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="table-row">
          <td className="table-dataT-title">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`table-data-feature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.portability === 'true' && (
                <HiCheck className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table