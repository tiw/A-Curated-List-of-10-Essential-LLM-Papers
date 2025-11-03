
import { Paper, ReadingPath } from './types';

export const PAPERS: Paper[] = [
  {
    id: 1,
    title: 'Attention Is All You Need',
    authors: 'Vaswani et al., 2017',
    description: 'The foundational paper for the Transformer architecture, introducing self-attention mechanisms and parallel training, which became the theoretical framework for all subsequent LLMs.',
    url: 'https://arxiv.org/abs/1706.03762',
  },
  {
    id: 2,
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    authors: 'Devlin et al., 2018',
    description: 'Introduced a pre-training method for bidirectional Transformers, shifting the paradigm for language understanding tasks and marking a major milestone for modern language models.',
    url: 'https://arxiv.org/abs/1810.04805',
  },
  {
    id: 3,
    title: 'Language Models are Unsupervised Multitask Learners',
    authors: 'Radford et al., 2019',
    description: 'Demonstrated the capability of large-scale auto-regressive language models (GPT-2) on multiple tasks, providing intuitive evidence for the potential of scaled-up language models.',
    url: 'https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',
  },
  {
    id: 4,
    title: 'Finetuning Language Models from Human Preferences',
    authors: 'Stiennon et al., 2020',
    description: 'Pioneered the use of human preferences for reinforcement learning fine-tuning (RLHF), opening new dimensions for research in model alignment and safety.',
    url: 'https://arxiv.org/abs/2009.01325',
  },
  {
    id: 5,
    title: 'Learning from Human Preferences with Preference-based RL',
    authors: 'Ziegler et al., 2020',
    description: 'Deepened the role of human feedback in alignment, providing a systematic methodology and experimental insights. This work is often cited alongside Stiennon et al. (2020).',
    url: 'https://arxiv.org/abs/1909.08593',
  },
  {
    id: 6,
    title: 'Training Language Models to Follow Instructions with Human Feedback',
    authors: 'Ouyang et al., 2022',
    description: 'Presented an alignment framework with "instruction following" as the core goal (InstructGPT), detailing data collection, reward modeling, and online RLHF implementation.',
    url: 'https://arxiv.org/abs/2203.02155',
  },
  {
    id: 7,
    title: 'Real or Fake? Detecting Generated Text with Classifier Guidance',
    authors: 'Petroni et al., 2020',
    description: 'Addresses the detection and safety evaluation of generated text, proposing detection strategies and an evaluation framework for adversarial scenarios.',
    url: 'https://www.google.com/search?q=Real+or+Fake%3F+Detecting+Generated+Text+with+Classifier+Guidance+Petroni+et+al.+2020',
  },
  {
    id: 8,
    title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
    authors: 'Lewis et al., 2020',
    description: 'A foundational work for the RAG paradigm, combining retrieval with generation to enhance the accuracy and controllability of knowledge-intensive tasks.',
    url: 'https://arxiv.org/abs/2005.11401',
  },
  {
    id: 9,
    title: 'PaLM: Scaling Language Models with Across-the-Board Training',
    authors: 'Chowdhery et al., 2022',
    description: 'Systematically explores training strategies and capability improvements for large-scale language models, emphasizing the profound impact of scale and training methods on model performance.',
    url: 'https://arxiv.org/abs/2204.02311',
  },
  {
    id: 10,
    title: 'InstructGPT: Aligning Language Models to Follow Instructions',
    authors: 'Ouyang et al., 2022',
    description: 'An empirical study focusing on instruction following as a training objective, providing a crucial reference for the alignment design of subsequent multimodal and dialogue systems. (Same paper as #6).',
    url: 'https://arxiv.org/abs/2203.02155',
  },
];

export const READING_PATHS: ReadingPath[] = [
  {
    title: 'Theory & Architecture',
    description: 'Master the core ideas of Transformers, bidirectional representations, retrieval augmentation, and large-scale training.',
    paperIds: [1, 2, 8, 9],
  },
  {
    title: 'Alignment & Safety',
    description: 'Understand human feedback, reward modeling, alignment stability, and detection frameworks.',
    paperIds: [4, 5, 6, 7],
  },
  {
    title: 'Application & Deployment',
    description: 'Build a comprehensive evaluation and safety framework from training to production, focusing on instruction following and RAG.',
    paperIds: [6, 8, 9, 7],
  },
];

export const REFERENCES: { title: string; url: string }[] = [
    { title: "Youssef Hosni's Substack", url: "https://youssefh.substack.com/p/30-important-research-papers-to-understand" },
    { title: "Awesome-LLM GitHub", url: "https://github.com/Hannibal046/Awesome-LLM" },
    { title: "Paper Guide AI", url: "https://paperguide.ai/papers/top/research-papers-llms/" },
    { title: "Sebastian Raschka's Magazine", url: "https://magazine.sebastianraschka.com/p/llm-research-papers-2025-list-one" },
    { title: "OpenAI Community Forum", url: "https://community.openai.com/t/foundational-must-read-gpt-llm-papers/197003" },
    { title: "A Survey of Large Language Models (arXiv)", url: "https://arxiv.org/pdf/2307.06435.pdf" },
    { title: "TechTarget - 12 Best LLMs", url: "https://www.techtarget.com/whatis/feature/12-of-the-best-large-language-models" },
    { title: "r/LocalLLaMA Reddit Thread", url: "https://www.reddit.com/r/LocalLLaMA/comments/1bghxlq/what_are_the_best_papers_and_resources_for_llm/" }
];
