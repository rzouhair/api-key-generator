'use client'

import { useDarkMode } from '@/hooks/useDarkMode'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { generateAlphabeticKey, generateAlphanumKey, generateHexKeys, generateTasasSecurityKey, generateUuid } from '@/lib/apiKeys'
import { useState } from 'react'
import { event } from '@/gtag'

export default function ApiKeyGenerator() {
  useDarkMode()
  const apiKeyTypes = [
      { label: "TASAS Security Key", value: "tasas", },
      { label: "8 Character Hex Key", value: "8HexKey", },
      { label: "16 Character Hex Key", value: "16HexKey", },
      { label: "32 Character Hex Key", value: "32HexKey", },
      { label: "8 Character Alphabetic Key", value: "8CharAlphaKey" },
      { label: "8 Character Alphanum Key", value: "8CharAlphanum", },
      { label: "16 Character Alphanum Key", value: "16CharAlphanum", },
      { label: "32 Character Alphanum Key", value: "32CharAlphanum", },
      { label: "UUID", value: "uuid", },
  ]
  const [selectedKeyType, setSelectedKeyType] = useState<string | null>()

  const [generatedKey, setGeneratedKey] = useState<string | null>()
  const [copied, setCopied] = useState<boolean>(false)

  function generateKey() {
    const requestedFunctionType: Record<string, Function> = {
      "tasas": generateTasasSecurityKey,
      "8HexKey": () => generateHexKeys(8),
      "16HexKey": () => generateHexKeys(16),
      "32HexKey": () => generateHexKeys(32),
      "8CharAlphaKey": () => generateAlphabeticKey(8),
      "8CharAlphanum": () => generateAlphanumKey(8),
      "16CharAlphanum": () => generateAlphanumKey(16),
      "32CharAlphanum": () => generateAlphanumKey(32),
      "uuid": generateUuid
    }

    if (selectedKeyType) {
      setGeneratedKey(requestedFunctionType[selectedKeyType]?.() as string)
      event({
        action: 'click',
        label: 'Generate API Key',
        value: selectedKeyType,
        category: 'Generate'
      })
    }      
    else {
      setGeneratedKey(undefined)
    }
  }

  function copyKey() {
    if (!generatedKey)
      return
    navigator.clipboard.writeText(generatedKey)
    event({
      action: 'click',
      label: 'Copied the generated key',
      value: `Type: ${selectedKeyType} - Key: ${generatedKey}`,
      category: 'Copy'
    })
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <Card className='w-full mx-auto'>
      <CardHeader>
        <CardTitle>Generate Secure API Keys</CardTitle>
        <CardDescription>Select your Desired API Key Type, Click Generate, and Copy Your Key</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-center gap-4 flex-col md:flex-row'>
          <Select onValueChange={setSelectedKeyType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an api key type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {
                  apiKeyTypes.map((keyType) => <SelectItem
                      key={keyType.value}
                      value={keyType.value}
                    >
                      {keyType.label}
                    </SelectItem>
                  )
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className='w-full md:w-[fit-content]' onClick={generateKey} disabled={!selectedKeyType}>Generate</Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex items-center justify-center space-x-4 rounded-md border p-4 overflow-hidden w-full gap-4'>
          <div className="w-full flex items-center break-all flex-1">
            { generatedKey || 'Generated key here' }
          </div>
          { generatedKey
            && <div>
              {
                copied
                  ? <Check />
                  : <Copy className='cursor-pointer' onClick={copyKey} />
              }
            </div>
          }
        </div>
      </CardFooter>
    </Card>
  )
}

