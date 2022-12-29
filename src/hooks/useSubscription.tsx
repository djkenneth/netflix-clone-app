import { useEffect, useState } from 'react'
// firebase stripe
import {
  onCurrentUserSubscriptionUpdate,
  Subscription,
} from '@stripe/firestore-stripe-payments'
// lib
import payments from '@/lib/stripe'
import { User } from 'firebase/auth'

const useSubscription = (user: User | null) => {
    const [subscription, setSubscription] = useState<Subscription | null>(null)
    useEffect(() => {
        if (!user) return
    
        onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
          setSubscription(
            snapshot.subscriptions.filter(
              (subscription) =>
                subscription.status === 'active' ||
                subscription.status === 'trialing'
            )[0]
          )
        })
      }, [user])
    
      return subscription
}

export default useSubscription