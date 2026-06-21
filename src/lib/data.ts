export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  imageAlt: string;
  featured: boolean;
  tags: string[];
  body?: string;
}

export const CATEGORIES = ['All', 'LLMs', 'Robotics', 'AI Tools', 'Research', 'Policy', 'Vision'];

export const ARTICLES: Article[] = [
{
  id: '1',
  slug: 'gpt-5-architecture-leaked',
  title: 'What the GPT-5 Architecture Tells Us About the Next Wave of Language Models',
  excerpt: 'New benchmarks and architectural hints suggest OpenAI\'s next flagship model will handle 10x longer context windows with half the compute cost — here\'s what that means for developers.',
  category: 'LLMs',
  readTime: '8 min read',
  date: 'Jun 3, 2026',
  author: { name: 'Priya Nair', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&q=80', role: 'Senior AI Correspondent' },
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f8fe7fc-1772547120162.png",
  imageAlt: 'Glowing neural network visualization in deep blue darkness, abstract AI concept',
  featured: true,
  tags: ['GPT-5', 'OpenAI', 'Architecture', 'LLMs'],
  body: `The AI research community has been buzzing since a series of benchmark results and architectural hints emerged from OpenAI's latest model evaluations. While the company has remained characteristically tight-lipped, the data paints a compelling picture.

## Context Windows: The Game-Changer

The most significant architectural shift appears to be in how GPT-5 handles long-context reasoning. Early benchmarks suggest the model can maintain coherent reasoning across documents exceeding 200,000 tokens — roughly the length of three full novels — without the "lost in the middle" degradation that plagued earlier models. This isn't just a memory upgrade. The underlying attention mechanism appears to have been fundamentally redesigned. Sources familiar with the training process describe a"hierarchical attention" approach that processes information at multiple granularities simultaneously.

## Compute Efficiency

Perhaps more surprising than the capability jump is the efficiency story. Despite dramatically expanded context handling, early reports suggest GPT-5 requires roughly 40-50% less compute per token compared to GPT-4 at equivalent quality thresholds.

This matters enormously for accessibility. If these numbers hold at production scale, it could bring frontier-model capabilities within reach of applications that previously couldn't afford them.

## What This Means for Developers

For teams building on top of language models, the practical implications are significant:

- **Document analysis**: Full legal contracts, research papers, and codebases can be processed in a single pass
- **Multi-turn coherence**: Conversations can maintain context across sessions without summarization hacks
- **Code understanding**: Entire repositories can be reasoned about holistically

The efficiency gains also suggest that fine-tuning and deployment costs may decrease substantially, potentially democratizing access to customized frontier models.

## The Competitive Landscape

OpenAI's advances don't exist in a vacuum. Anthropic's Claude 4 series has been pushing similar boundaries, and Google's Gemini Ultra 2 reportedly handles even longer contexts natively. The race isn't over — but the pace of progress suggests 2026 will be remembered as the year long-context reasoning became table stakes.

The real question isn't which model wins on benchmarks. It's how these capabilities translate into products that genuinely change how people work with information.`
},
{
  id: '2',
  slug: 'humanoid-robots-factory-floor',
  title: 'Humanoid Robots Are Actually Working on Factory Floors Now — What 6 Months of Data Shows',
  excerpt: 'Figure AI and Apptronik have crossed a threshold: robots that learn new assembly tasks in under 4 hours. Real deployment data from three manufacturers reveals what\'s working and what\'s still hard.',
  category: 'Robotics',
  readTime: '11 min read',
  date: 'Jun 2, 2026',
  author: { name: 'Marcus Webb', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80', role: 'Robotics Correspondent' },
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19466ca2f-1772891529593.png",
  imageAlt: 'White humanoid robot in bright industrial setting, clean factory environment',
  featured: true,
  tags: ['Humanoid', 'Figure AI', 'Manufacturing', 'Deployment'],
  body: `Six months ago, three manufacturers agreed to share deployment data from their humanoid robot pilots. The results are more nuanced than either the hype or the skepticism predicted.`
},
{
  id: '3',
  slug: 'cursor-vs-copilot-2026',
  title: 'Cursor vs. GitHub Copilot in 2026: A Developer\'s Honest 90-Day Comparison',
  excerpt: 'After three months of switching between both tools on a real production codebase, here\'s what actually matters — and it\'s not the benchmark scores.',
  category: 'AI Tools',
  readTime: '7 min read',
  date: 'Jun 1, 2026',
  author: { name: 'Yuki Tanaka', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80', role: 'Tools Editor' },
  image: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d",
  imageAlt: 'Dark code editor screen with colorful syntax highlighting on black background',
  featured: false,
  tags: ['Cursor', 'Copilot', 'Developer Tools', 'Productivity'],
  body: `The benchmark wars between AI coding assistants have become almost meaningless. HumanEval scores and SWE-bench numbers tell you something about raw capability, but they tell you almost nothing about what it feels like to spend 8 hours a day inside a tool.`
},
{
  id: '4',
  slug: 'eu-ai-act-enforcement-begins',
  title: 'EU AI Act Enforcement Has Officially Begun — Here\'s What Changed on Day One',
  excerpt: 'The first wave of compliance deadlines passed June 1st. Three companies already received notices. What the early enforcement priorities reveal about where regulators are actually looking.',
  category: 'Policy',
  readTime: '6 min read',
  date: 'Jun 1, 2026',
  author: { name: 'Amara Osei', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80', role: 'Policy Analyst' },
  image: "https://images.unsplash.com/photo-1673528799379-80d4e1d6b1b3",
  imageAlt: 'European parliament building exterior in daylight, architectural columns, clear sky',
  featured: false,
  tags: ['EU AI Act', 'Regulation', 'Compliance', 'Policy'],
  body: `The European Union's AI Act moved from theoretical framework to active enforcement on June 1st, 2026. Within 24 hours, three companies had received preliminary notices — not fines, but formal requests for documentation.`
},
{
  id: '5',
  slug: 'multimodal-reasoning-breakthrough',
  title: 'The Quiet Multimodal Breakthrough That Nobody Is Talking About Enough',
  excerpt: 'A paper from a small DeepMind team describes a model that can reason across text, images, audio, and structured data simultaneously — without separate encoders. The implications are significant.',
  category: 'Research',
  readTime: '9 min read',
  date: 'May 30, 2026',
  author: { name: 'Priya Nair', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&q=80', role: 'Senior AI Correspondent' },
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eec515f9-1772310231604.png",
  imageAlt: 'Abstract digital brain visualization with glowing connections on dark background',
  featured: false,
  tags: ['Multimodal', 'DeepMind', 'Research', 'Architecture'],
  body: `Most multimodal AI systems are architectural patchwork: separate encoders for each modality stitched together at the embedding level. A new paper from a small team at DeepMind proposes something fundamentally different.`
},
{
  id: '6',
  slug: 'ai-image-generation-watermarking',
  title: 'Invisible Watermarks in AI Images Are Now Mandatory in Three US States',
  excerpt: 'California, Colorado, and Washington have passed laws requiring provenance metadata in AI-generated images. How the technical implementation actually works — and why it\'s harder than it sounds.',
  category: 'Policy',
  readTime: '5 min read',
  date: 'May 29, 2026',
  author: { name: 'Amara Osei', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80', role: 'Policy Analyst' },
  image: "https://images.unsplash.com/photo-1710158309679-4def7aeeca1f",
  imageAlt: 'Digital watermark pattern overlay on bright white surface, geometric grid lines',
  featured: false,
  tags: ['Watermarking', 'Policy', 'Image Generation', 'C2PA'],
  body: `Three US states have now passed legislation requiring AI image generators to embed provenance metadata in all outputs. The laws took effect June 1st, 2026, and the technical community is scrambling to implement compliant systems.`
},
{
  id: '7',
  slug: 'vision-language-models-medical',
  title: 'Vision-Language Models Are Reading Radiology Scans Better Than Junior Residents',
  excerpt: 'A Stanford Medicine study across 12,000 chest X-rays shows a fine-tuned VLM achieving diagnostic accuracy that matches or exceeds first-year radiology residents. The nuances matter.',
  category: 'Vision',
  readTime: '10 min read',
  date: 'May 28, 2026',
  author: { name: 'Dr. Fatima Al-Rashid', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&q=80', role: 'Healthcare AI Writer' },
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a28e72a-1765963211781.png",
  imageAlt: 'Medical imaging screen displaying chest X-ray in dimly lit hospital radiology room',
  featured: false,
  tags: ['Medical AI', 'Vision', 'Radiology', 'Stanford'],
  body: `The headline writes itself: AI reads X-rays better than doctors. But the Stanford Medicine study published this week is more careful and more interesting than that framing suggests.`
},
{
  id: '8',
  slug: 'open-source-llm-landscape-2026',
  title: 'The Open-Source LLM Landscape in Mid-2026: A Practical Map',
  excerpt: 'Llama 4, Mistral Large 3, Qwen 3, and a dozen smaller models have shipped in the last quarter. Which ones are actually worth deploying, and for what use cases?',
  category: 'LLMs',
  readTime: '12 min read',
  date: 'May 27, 2026',
  author: { name: 'Marcus Webb', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80', role: 'Robotics Correspondent' },
  image: "https://images.unsplash.com/photo-1735396454489-0746f9f0e476",
  imageAlt: 'Open source code on screen with green terminal text on dark background',
  featured: false,
  tags: ['Open Source', 'Llama', 'Mistral', 'Qwen'],
  body: `The open-source LLM ecosystem has become genuinely hard to navigate. In the first five months of 2026, more than 40 models above 7B parameters have been released on Hugging Face with meaningful benchmark improvements.`
}];


export const TOPICS = [
{ label: 'LLMs', count: 24, color: 'bg-primary/10 text-primary border-primary/20' },
{ label: 'Robotics', count: 18, color: 'bg-accent/10 text-accent-foreground border-accent/20' },
{ label: 'AI Tools', count: 31, color: 'bg-muted text-muted-foreground border-border' },
{ label: 'Research', count: 22, color: 'bg-muted text-muted-foreground border-border' },
{ label: 'Policy', count: 15, color: 'bg-muted text-muted-foreground border-border' },
{ label: 'Vision', count: 12, color: 'bg-muted text-muted-foreground border-border' },
{ label: 'Audio AI', count: 9, color: 'bg-muted text-muted-foreground border-border' },
{ label: 'Agents', count: 19, color: 'bg-muted text-muted-foreground border-border' }];
