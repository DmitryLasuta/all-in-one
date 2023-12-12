'use client'

import {
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  useAppDispatch,
  useAppSelector,
} from '@/lib/services/redux'
import { useCallback, useEffect } from 'react'

import type { Product } from '@/lib/types'
import useSWR from 'swr'

export const useCart = () => {
  const { items, total } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  const { data, isLoading, mutate } = useSWR<Product[]>(
    { url: 'api/products', ids: Object.keys(items) },
    async (params: { url: string; ids: string[] }) => {
      const { ids, url } = params

      const response = Promise.all<Product>(
        ids.map(async id => {
          const res = await fetch(`${url}/${id}`, {
            cache: 'force-cache',
            next: { revalidate: 60, tags: ['products'] },
            method: 'GET',
          })
          return await res.json()
        })
      )
      return response
    },
    {}
  )

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addToCart(product))
    },
    [dispatch]
  )

  const handleRemoveFromCart = useCallback(
    (product: Product) => {
      dispatch(removeFromCart(product))
      mutate()
    },
    [dispatch, mutate]
  )

  const handleClearCart = useCallback(() => {
    dispatch(clearCart())
    mutate()
  }, [dispatch, mutate])

  const handleIncreaseQuantity = useCallback(
    (product: Product) => {
      dispatch(increaseQuantity(product))
    },
    [dispatch]
  )

  const handleDecreaseQuantity = useCallback(
    (product: Product) => {
      dispatch(decreaseQuantity(product))
    },
    [dispatch]
  )
  return {
    products: data,
    items,
    total,
    isLoading,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  }
}
