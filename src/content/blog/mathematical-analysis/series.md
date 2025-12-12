---
title: "Numerical Seqeunces and Series"
description: "Convergence, divergence, and power series."
pubDate: "2025-12-11"
---

## Convergent Sequences

### Definition

The sequence $ a_n $ converges to  point $ a $ if for every $\epsilon > 0$ there exists $N \in \mathbb{N}$ such that  for all $n \geq N$ we have $ d(a_n , a) < \epsilon $.

If we are in $\mathbb{R}$, with standart metric $d(x,y) = |x-y|$ . It reduces to $ |a_n - a| < \epsilon $.
We denote the limit of $a_n$ as $n \to \infty$ by $\lim_{n \to \infty} a_n$.

In the further sections, we will mention the metric space $(X,d)$. However, for now take it as granted and focus on the definition of convergence in $\mathbb{R}$.

### Examples
1. Let $a_n = \frac{1}{n}$. Then $\lim_{n \to \infty} a_n = 0$.

    Proof: Given $\epsilon > 0$, choose $N > \frac{1}{\epsilon}$. Then for all $n \geq N$ we have $|a_n - 0| = \frac{1}{n} < \epsilon$. Therefore $\lim_{n \to \infty} a_n = 0$. $\blacksquare$

    Note that we know the such $N$ exists due to Archimedean Property of Numbers.

2. Let $a_n = 3$. Then $\lim_{n \to \infty} a_n = 3$.

    Proof: Given $\epsilon > 0$, choose $N = 1$. Then for all $n \geq N$ we have $|a_n - 3| = 0 < \epsilon$. Therefore $\lim_{n \to \infty} a_n = 3$. $\blacksquare$


