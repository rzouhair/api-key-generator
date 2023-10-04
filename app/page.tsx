import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function ApiKeys() {
  return (
    <main className='max-w-screen-md w-full mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center mt-24 mb-8 md:text-7xl'>Welcome</h1>
      <Card className='w-full mx-auto'>
        <CardHeader>
          <CardTitle>Thank you for using our services</CardTitle>
          <CardDescription>Here is a List of the Services available</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href='/api-keys'>
            <Button className='w-full'>
              Api Keys Generator
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}
