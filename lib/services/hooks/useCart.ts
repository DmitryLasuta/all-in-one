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
    'api/products',
    async () => {
      const response = await fetch('/api/products', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ ids: Object.keys(items) }),
        next: { revalidate: 50 },
        cache: 'no-store',
      })
      return await response.json()
    },
    {
      errorRetryCount: 3,
    }
  )

  useEffect(() => {
    mutate()
  }, [items, mutate])

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addToCart(product))
    },
    [dispatch]
  )

  const handleRemoveFromCart = useCallback(
    (product: Product) => {
      dispatch(removeFromCart(product))
    },
    [dispatch]
  )

  const handleClearCart = useCallback(() => {
    dispatch(clearCart())
  }, [dispatch])

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
