import React from 'react';

// Shared Tailwind CSS classes
const SHARED_CLASSES = {
  heading: "text-lg font-bold text-red-500 mb-2",
  card: "bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md text-center",
  button: "bg-red-500 text-white py-2 px-6 rounded-lg",
};

const SubscriptionPlan = () => {
  const plans = [
    {
      title: "All Genre",
      description: "Action and Adventure, Classics, Fantasy, Historical Fiction, Horror, Literary Fiction",
      details: [
        "Read on Kindle or Laptop",
        "No Ads",
        "Number of devices that can be logged in",
        "Max audio quality",
        "Max audio quality"
      ],
      subscriptions: [
        { title: "Super", price: "$409/Year", features: ["✔️", "❌", "2", "Lorem ipsum", "Lorem ipsum"] },
        { title: "Premium", price: "$109/Year", features: ["✔️", "✔️", "4", "Lorem ipsum", "Lorem ipsum"] },
        { title: "Premium", price: "$99/Year" }
      ]
    }
  ];

  return (
    <div className="bg-zinc-100 dark:bg-black p-6">
      <h2 className="text-center text-2xl font-bold mb-6">Subscribe to read all books</h2>
      <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6">
        {plans.map((plan, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">{plan.title}</h3>
                <p className="text-sm text-red-500 mb-4">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {plan.subscriptions.map((sub, idx) => (
                    idx < 2 && (
                      <div key={idx} className="text-center">
                        <h4 className={SHARED_CLASSES.heading}>{sub.title}</h4>
                        <ul className="space-y-2">
                          {sub.features.map((feature, featureIdx) => (
                            <li key={featureIdx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {plan.subscriptions.map((sub, idx) => (
                <div key={idx} className={SHARED_CLASSES.card}>
                  <h4 className={SHARED_CLASSES.heading}>{sub.title}</h4>
                  <p className="text-xl font-bold">{sub.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mt-6">
          <button className={SHARED_CLASSES.button}>CONTINUE WITH SUPER</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
