import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Don't Hire Me, Unless..." />
        <p className="description">
          ...you want killer copy (eww buzzwords) that actually converts, of course.

In that case…

Let’s cut the chit-chat and get straight into it:

You own a business.

Ya’ know, have a killer product or service.

The only issue?

You have to persuade people to buy it.

Contrary to popular belief, if you build it they won’t come.

Now…

If you build it and advertise it well, they’ll certainly come however.

That’s where I come in.

Howdy, I’m Colton.

Your friendly neighborhood copywriter.

I’ve written copy in several different markets.

Sex toys, CBD, info products, insurance, software and beyond.

Now:

You’re here for two reasons.

The first?

You currently have amazingly subpar copy.

It isn’t converting like it should be, sales are lackluster.

Your audience isn’t engaged, and they don’t love your brand.

The second?

You quite simply don’t have time.

You run a business, your job is to deliver your product or service to the best of your ability.

You want to outsource it to someone that can get the job done well.

Good news for you, though…

I can solve both of those problems.

All you have to do to get started?

Simply shoot me an invite.

I'll take a look over it, then if I think we'll be a good fit, I'll send a proposal.

Sound good?

Kk, talk soon.

- Colton
        </p>
      </main>

      <Footer />
    </div>
  )
}
