import { Separator } from '@/components/ui/separator'
import ApiKeyGenerator from '@/components/app/ApiKeyGenerator'
import { Metadata } from 'next'
import { description } from '../layout'

const name = 'API Keys Generation Page'
export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL as string),
  alternates: {
    canonical: '/api-keys',
    languages: {
      'en-US': '/en-US',
    },
  },
}

export default function ApiKeys() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name,
    description,
  }
  return (
    <main className='max-w-screen-md w-full mx-auto px-4'>
      <h1 className='font-bold text-4xl md:text-6xl text-center mt-24'>API Keys generation</h1>
      <h2 className='text-lg md:text-xl text-center mt-4 mb-8 text-muted-foreground'>Generate random and unique keys for your APIs for free and in a single click</h2>
      <section>
        <ApiKeyGenerator />
        <Separator className='my-8' />
        <section className="prose-sm !max-w-full w-full mx-0">
          <h1>Generate Secure and Unique API Keys Online</h1>
          <p>Are you looking for a reliable solution to generate secure and unique API keys for your digital projects? Look no further! Our free online API Key Generator is the answer to your authentication needs.</p>
          <h2>Why Choose Our API Key Generator?</h2>
          <ul>
          <li>
          <p><strong>Security First:</strong> We prioritize the security of your applications. Our generator creates random, cryptographically secure API keys, making it extremely difficult for unauthorized users to gain access.</p>
          </li>
          <li>
          <p><strong>Ease of Use:</strong> Generating API keys has never been easier. With just a few clicks, you can have a unique API key ready to use in your project.</p>
          </li>
          <li>
          <p><strong>Customization:</strong> Tailor your API keys to your {`project's`} requirements. Choose from various configurations, including alphanumeric keys, numeric keys, or a mix of both.</p>
          </li>
          <li>
          <p><strong>Hashing and Encoding:</strong> Take your API key security to the next level. Our generator provides options to hash and encode your keys, adding an extra layer of protection.</p>
          </li>
          <li>
          <p><strong>Fast and Free:</strong> Our service is lightning fast and completely free. No hidden charges, no sign-up required. Get your API keys instantly!</p>
          </li>
          </ul>
          <h2>The Importance of Secure API Keys</h2>
          <p>API keys serve as digital keys to unlock the doors of your applications and services. Ensuring their security is paramount to protect your data and maintain the integrity of your systems.</p>
          <p>Using weak or easily guessable keys can leave your projects vulnerable to malicious attacks. {"That's"} why {"it's"} crucial to use a reliable API Key Generator that prioritizes randomness and security.</p>
          <h2>How to Generate Your API Key</h2>
          <ol>
          <li>
          <p>Select the desired configuration for your API key. Choose between alphanumeric, numeric, or a custom mix.</p>
          </li>
          <li>
          <p>Click the {`"Generate"`} button, and our generator will create a unique, secure API key for your project.</p>
          </li>
          <li>
          <p>Optionally, you can further enhance your {"key's"} security by applying hashing or encoding. Choose from MD5, SHA256, SHA512, or Base64 options.</p>
          </li>
          <li>
          <p>Copy your generated API key to your clipboard with a single click and paste it into your {"project's"} configuration.</p>
          </li>
          </ol>
          <h2>Use Cases for API Keys</h2>
          <p>API keys are versatile and widely used in various industries and applications:</p>
          <ul>
          <li>
          <p><strong>Web Development:</strong> Secure access to APIs and services in web applications.</p>
          </li>
          <li>
          <p><strong>Mobile Apps:</strong> Authenticate users and enable secure interactions with your server.</p>
          </li>
          <li>
          <p><strong>IoT Devices:</strong> Ensure only authorized devices can access your IoT services.</p>
          </li>
          <li>
          <p><strong>Cloud Services:</strong> Protect your cloud resources and data with secure API keys.</p>
          </li>
          <li>
          <p><strong>Third-Party Integrations:</strong> Enable third-party developers to interact with your platform securely.</p>
          </li>
          </ul>
          <h2>Conclusion</h2>
          <p>Secure your digital projects and protect your data with randomly generated, cryptographically secure API keys. Our free online API Key Generator is the perfect tool to enhance your application security without any hassle.</p>
          <p>Get started today and experience the peace of mind that comes with using secure and unique API keys for your projects.</p>
          <p><em>Disclaimer: This service is provided for educational and testing purposes. Always follow best practices for API key management in production environments.</em></p>
        </section>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
