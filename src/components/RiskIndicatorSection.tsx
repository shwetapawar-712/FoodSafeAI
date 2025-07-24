import { CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

const mockIngredients = [
  { name: 'Wheat Flour', status: 'risk', reason: 'Contains Gluten' },
  { name: 'Sugar', status: 'safe', reason: 'No allergens detected' },
  { name: 'Natural Flavoring', status: 'unknown', reason: 'Unclear source - may contain allergens' },
  { name: 'Salt', status: 'safe', reason: 'No allergens detected' },
  { name: 'Soy Lecithin', status: 'risk', reason: 'Contains Soy' },
  { name: 'Vanilla Extract', status: 'safe', reason: 'No allergens detected' },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'safe':
      return <CheckCircle className="w-4 h-4 text-status-safe" />;
    case 'risk':
      return <AlertTriangle className="w-4 h-4 text-status-risk" />;
    case 'unknown':
      return <HelpCircle className="w-4 h-4 text-status-unknown" />;
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'safe':
      return <span className="status-safe px-2 py-1 rounded-full text-xs font-medium">Safe</span>;
    case 'risk':
      return <span className="status-risk px-2 py-1 rounded-full text-xs font-medium">Risk</span>;
    case 'unknown':
      return <span className="status-unknown px-2 py-1 rounded-full text-xs font-medium">Unknown</span>;
    default:
      return null;
  }
};

const RiskIndicatorSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Instant Risk Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly which ingredients are safe, risky, or need further investigation based on your allergy profile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mock Scan Result */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Scan Result: Chocolate Chip Cookies
              </h3>
              <p className="text-muted-foreground">
                Scanned on {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Ingredients Analysis:</h4>
              {mockIngredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(ingredient.status)}
                    <div>
                      <p className="font-medium text-foreground">{ingredient.name}</p>
                      <p className="text-sm text-muted-foreground">{ingredient.reason}</p>
                    </div>
                  </div>
                  {getStatusBadge(ingredient.status)}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-status-risk-bg rounded-lg border border-status-risk">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-status-risk" />
                <span className="font-semibold text-status-risk">Allergen Alert</span>
              </div>
              <p className="text-status-risk text-sm">
                This product contains <strong>Gluten</strong> and <strong>Soy</strong> which are in your allergy profile.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-status-safe-bg rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-status-safe" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Safe Ingredients</h4>
                  <p className="text-muted-foreground">
                    Ingredients verified as safe based on your allergy profile and our comprehensive database.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-status-risk-bg rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-status-risk" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Risk Detected</h4>
                  <p className="text-muted-foreground">
                    Ingredients that contain or may contain allergens you've specified in your profile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-status-unknown-bg rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-status-unknown" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Needs Investigation</h4>
                  <p className="text-muted-foreground">
                    Vague ingredients that require manufacturer contact for complete allergen information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskIndicatorSection;