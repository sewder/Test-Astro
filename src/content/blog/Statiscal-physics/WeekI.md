---
title: "Week I"
description: "Thermodynamics"
pubDate: "2026-01-22"
---

## Energy Transfer to a Macroscopic System

Either by heating or cooling, changing external parameters (pressure, volume, etc.) .

$$
\begin{matrix}
   \textbf{Example:} & \\
   \bullet\ \text{Heating the system (by conduction, by radiation)}, & \\
   \bullet\ \text{Applying a force on a squeezable system (by work)} & 
\end{matrix}
$$
## Temperature 



<div style="display: flex; justify-content: center; margin: 2rem 0;"><svg width="340" height="150" viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;"><rect x="10" y="25" width="100" height="100" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="60" y="65" font-family="sans-serif" font-size="16" text-anchor="middle" font-weight="bold" fill="#1e293b">System A</text><text x="60" y="90" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#475569">T<tspan dy="5" font-size="10">A</tspan></text><rect x="230" y="25" width="100" height="100" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="280" y="65" font-family="sans-serif" font-size="16" text-anchor="middle" font-weight="bold" fill="#1e293b">System B</text><text x="280" y="90" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#475569">T<tspan dy="5" font-size="10">B</tspan></text><line x1="120" y1="75" x2="220" y2="75" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowhead-right)" marker-start="url(#arrowhead-left)"/><text x="170" y="60" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#ef4444" font-weight="bold">Q</text><defs><marker id="arrowhead-right" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" /></marker><marker id="arrowhead-left" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto"><polygon points="10 0, 0 3.5, 10 7" fill="#ef4444" /></marker></defs></svg></div>



Two systems exchange energy in the form of heat systems in "thermal contact".  

If Q > 0 , from A to B then A is hotter than B ($T_A > T_B$).

Hotness is measured on some definite scale.

## Thermal Equilibrium

Macroscopic properties are constant in time. Microscopic motion fluctuations can occur.

## Ideal Gas (Dilate Gas)

Interatomic forces are negligible. 
(mean-particle spacing is large)

## Pressure exerted on the walls of the container

$$
P = \frac{F}{A} = \frac{\Delta p}{\Delta t * A}
$$
Where $P$ is pressure, $F$ is force, $A$ is area, $p$ is momentum, $t$ is time.

<div style="display: flex; justify-content: center; margin: 2rem 0;"><svg width="500" height="180" viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;"><defs><marker id="arrow-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" /></marker></defs><!-- Panel 1: Before Collision --><text x="120" y="25" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">Before Collision</text><rect x="200" y="40" width="10" height="100" fill="#cbd5e1" stroke="#64748b"/><!-- Particle --><circle cx="100" cy="90" r="12" fill="#3b82f6" /><text x="100" y="65" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#1e293b">m</text><!-- Velocity Vector --><line x1="120" y1="90" x2="160" y2="90" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-blue)" /><text x="140" y="115" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#3b82f6">v<tspan dy="3" font-size="10">x</tspan></text><!-- Panel 2: After Collision --><text x="370" y="25" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e293b">After Collision</text><rect x="450" y="40" width="10" height="100" fill="#cbd5e1" stroke="#64748b"/><!-- Particle (moved closer) --><circle cx="410" cy="90" r="12" fill="#3b82f6" opacity="0.9" /><text x="410" y="65" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#1e293b">m</text><!-- Velocity Vector (Opposite) --><line x1="390" y1="90" x2="350" y2="90" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" /><text x="370" y="115" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#ef4444">-v<tspan dy="3" font-size="10">x</tspan></text><!-- Red Arrow Marker --><marker id="arrow-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" /></marker><!-- Divider Line --><line x1="250" y1="20" x2="250" y2="160" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="5,5" /></svg></div>


$$ \Delta p =  2  m v_x$$

Number of collision in time $$  \Delta t = (A* v_x* \Delta t)(\frac{N}{V}) \frac{1}{2} $$

$$ P = \frac{1}{A} \frac{2 m v_x}{\Delta t} \frac{N}{V} \frac{1}{2} A v_x \Delta t $$

$$ P = m {v_x}^2 \frac{N}{V}$$

There is a distribuation of velocities with average velocity $$\langle v_x^2 \rangle$$

$$
\begin{aligned}
\langle v^2 \rangle &= \sum_{I} v_i^2  \\
 &= 3 \langle {v_x}^2 \rangle
 \end{aligned}
$$

$$ P = \frac{1}{3} m \langle {v}^2 \rangle \frac{N}{V} $$

$$ P = \frac{2}{3} \underbrace{\frac{1}{2}m \langle {v}^2 \rangle}_{\text{average kinetic energy per particle}} \frac{N}{V} $$

## Empirical Ideal Gas Law

$$ P = \frac {N}{V} k T$$

where k is Boltzmann constant.

So we can obtain 

$$ \frac{1}{2} m \langle {v}^2 \rangle = \frac{3}{2} k T 
$$

3 shows that we have 3 dimensions , and each degree of freedom contributes an amount of $\frac{1}{2} k T$ to the total kinetic energy.

This is called Equipartition Theorem.

## First Law of Thermodynamics

Conservation of energy.

$$ q = \Delta E+ w $$

$$ q = \Delta E + P \Delta V $$

## Heat capacity

$$ C_x$$ denotes the heat capacity under conditions x

$$ C_V = \frac{q}{\Delta T}= \frac{\Delta E}{\Delta T}=\frac{\partial E}{\partial T} $$

For an ideal gas 

$$ E = \frac{3}{2} N k T  $$

Hence , $$ C_V = \frac{\partial E}{\partial T} = \frac{3}{2} N k $$

Ideal gas energy does not depend on volume.

## Heat capacity at constant pressure

$$ C_P = \frac{q}{\Delta T}= \frac{\Delta E}{\Delta T}+\frac{\Delta (PV)}{\Delta T}$$

For an ideal gas 

$$ C_P = \frac{\partial E}{\partial T} + \frac{\partial (PV)}{\partial T} = \frac{3}{2} N k + N k = \frac{5}{2} N k $$

Since , $$ P = \frac{N}{V} k T  \implies V = \frac{N}{P} k T \implies \Delta V = \frac{N}{P} k T \Delta T $$

Hence, $$ C_p = \frac{5}{2} N k $$


<div style="display: flex; justify-content: center; margin: 2rem 0;"><svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;"><defs><marker id="arrow-axis" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#64748b" /></marker><marker id="arrow-path" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" /></marker></defs><!-- X-axis (Volume) --><line x1="40" y1="260" x2="360" y2="260" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-axis)" /><text x="360" y="285" font-family="sans-serif" font-size="14" fill="#64748b" font-weight="bold">V</text><!-- Y-axis (Pressure) --><line x1="40" y1="260" x2="40" y2="40" stroke="#64748b" stroke-width="2" marker-end="url(#arrow-axis)" /><text x="20" y="40" font-family="sans-serif" font-size="14" fill="#64748b" font-weight="bold">P</text><!-- Cycle Path --><path d="M 120 200 C 120 100, 280 100, 280 200 C 280 240, 120 240, 120 200" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="3" /><!-- Direction Arrows on Path --><path d="M 200 137 L 210 137" stroke="none" marker-end="url(#arrow-path)" /><path d="M 200 232 L 190 232" stroke="none" marker-end="url(#arrow-path)" /><!-- Work Label --><text x="200" y="195" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#3b82f6" font-weight="bold">Work (W)</text><text x="200" y="215" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#64748b">Area enclosed</text></svg></div>

